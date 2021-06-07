const { Reporter } = require("gatsby");
const path = require(`path`);




async function createMenuPages(graphql, actions) {
	const { createPage } = actions;
	const result = await graphql(`
	query {
		allStrapiMenuItem(limit: 10) {
			nodes {
			  slug
			  id
			  preview {
				alternativeText
				url
			  }
			  description
			  title
			}
		  }
		  allStrapiMenu {
			nodes {
			  preview {
				alternativeText
				url
			  }
			  menu_items {
				id
				title
				slug
			  }
			  id
			  description
			  slug
			}
		  }
		}
			`);


	console.log(result);
	if (result.errors) throw result.errors;

	const menuItems = result.data.allStrapiMenuItem.nodes;
	const menus = result.data.allStrapiMenu.nods;

/**
 * slug
			  id
			  preview {
				formats {
				  large {
					url
				  }
				}
			  }
			  description
			  title
 */

	menuItems
		.forEach((item) => {
			const { id, slug, preview, description, title } = item;
			const menuPath = `/menu-item/${slug}`;

			console.log({item, menuPath, slug})

			createPage({
				path: menuPath,
				component: path.resolve("./src/templates/menu-items/MenuItemPage.tsx"),
				context: { 
					id,
					// image : imageUrl,
					image: preview[0].url,
					imageAlt: preview[0].alternativeText,
					descr : description,
					title : title
				 },
			});
		});
}

exports.createPages = async ({ graphql, actions }) => {
	await createMenuPages(graphql, actions);
};
