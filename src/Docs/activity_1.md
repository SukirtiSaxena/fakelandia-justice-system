Activity 1 - Site Structure
Introduction - Dummy Routing
Much of this task is about practicing taking a visual design and turning it into an actual website.

Take a look at this image the goverment of Fakelandia have provided:

Homepage

This is their desired homepage. From the header, it looks like you'll want multiple routes. Perhaps one for your homepage, and perhaps one each for the "misdemeanours" and "confession" pages?

👉 Use npm to install react-router version 6

👉 Get rid of the default bits of create-react-app that you don't need (e.g. logo.svg)

👉 Create dummy components for your home, confession and misdemeanour pages, e.g.

const Home = () => <div>Home!</div>;

👉 Add react-router components and define routes which render the correct dummy components when you navigate to the URLs for your homepage, and a misdemeanours page, and a confession page.

(You will have to choose these URLs when you define your routes!)

👉 How does your app handle a mistyped route? Can you add a nice default 404 route defined in its own component?

What's Next?
So far we have enabled basic routing: when we navigate manually to a particular URL, we can get a particular component (or a 404 component for unknown URLs)

Next, let's begin adding some content to our site.

Layouts
From the image we've seen so far, it seems like the Fakelandians want a header with a nav bar in it to be shared across all their pages.

👉 Create a Layout component with a header in it.

❗ Maybe the header component itself has its own sub-components such as Nav? Maybe Nav has its own sub-components too?! It's up to you how you structure your components! Try and keep them small and neat - if they get large, split them out into subcomponents.

👉 Use nested routes to render the nav bar at the top of each of the routes you have so far.

(Remember to modify your path on your old routes - if you give the Layout a path of '/' then you need to remove that character from the start of the old routes.)

👉 Make sure your nav links are using the react-router components to navigate seamlessly between your routes.

👉 (Optional) It might be cool to add a footer! You could put your name and a copyright symbol in it to impress people with. Although... footers are famously annoying to create using CSS, particularly if you want them to stay at the bottom for any height of page, so consider this a stretch goal.

❗ Multiple solutions exist in CSS for creating footers. The most modern is to use flexbox - think about making your <body> flex in a column direction, and to make your <main> element flex-grow.

❗ Don't spend too long messing with footers! CSS can be deeply irritating. If it doesn't work out, just delete the footer for now and move on, and maybe come back later if you want to.

Next
👉 Remember to commit your code often. Small commits with descriptive messages are best, e.g.:

"Initial commit"
"Installed react-router"
"Added route component"
"Added footer"
"Removed footer"
So far we've set up the basics of a functioning website! Let's get looking at that misdemeanours page in activity 2