const express = require('express');
const router = express.Router();
const request = require('request');
const feed = require('rss-to-json');
const htmlToJson = require('html-to-json');
const tumblr = require('tumblr.js');
const tumblrApi = require('../../config/keys_dev').tumblrApi;
const moment = require('moment');

// Zazzle API route GET request
router.get('/merch', (req, res) => {
	feed.load('http://feed.zazzle.com/oneofftees/rss', (err, rss) => {
		if (err) {
			res.json(err);
		} else {
			const items = [];
			rss.items.map(response => {
				// set price to the description which is now a body of HTML
				let price = response.description;
				// Parse through the HTML for the class containing the price, then covert the class to json
				let itemPrice = htmlToJson.parse(price, [
					'.ZazzleCollectionItemCellProduct-price',
					function($item) {
						return $item.text();
					}
				]);

				let itemThumbnail = response.media.thumbnail[0].url[0];
				// change the thumbnail pic to a larger pic not included in the responseponse
				let itemPic = itemThumbnail.replace('_152', '_500');
				// place comma's inside the titles where they should be
				let titleCommaFix = response.title;
				let itemTitle = titleCommaFix.replace('&#39;', "'");

				items.push({
					title: itemTitle,
					link: response.link,
					picture: itemPic,
					price: itemPrice._rejectionHandler0[0],
					created: response.created
				});
				return rss.items;
			});
			res.json(items);
		}
	});
});

// Tumblr API route GET request
router.get('/posts', (req, res) => {
	const tumblrPosts = [];

	const client = tumblr.createClient({
		consumer_key: tumblrApi.key,
		consumer_secret: tumblrApi.secret,
		token: tumblrApi.token,
		token_secret: tumblrApi.tokensecret
	});

	client.blogPosts('taviusdotorg.tumblr.com', (err, data) => {
		data.posts.map(response => {
			const blogHTML = response.reblog.comment;
			const summary =
				response.slug.charAt(0).toUpperCase() +
				response.slug.slice(1).replace(/-/gi, ' ');

			const blogPics = [];
			const blogBody = [];
			const blogLink = [];

			if (response.photos === undefined) {
				response.photos = '';
				blogPics.push('');
			} else if (response.photos[0].original_size === undefined) {
				response.photos[0].original_size = '';
				blogPics.push('');
			} else {
				blogPics.push(response.photos[0].original_size.url);
			}

			if (response.body === undefined) {
				blogBody.push(response.reblog.comment);
			} else {
				blogBody.push(response.body);
			}

			if (response.link_url === undefined) {
				blogLink.push(response.post_url);
			} else {
				blogLink.push(response.link_url);
			}

			const timeStamp = moment(new Date(response.date)).format('LLLL');
			// console.log(timeStamp);

			tumblrPosts.push({
				blogtext: blogHTML,
				blogpic: blogPics[0],
				date: timeStamp,
				title: summary,
				link: blogLink
			});
			return data.posts;
		});
		res.json(tumblrPosts);
	});
});

module.exports = router;
