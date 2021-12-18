console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 5  ┃
┗━━━━━━━━━━━━━━┛

1. Add a header with a menu-button
- Add a sidebar with a list of links
- Add a main section with a headline.
- THe headline should read "Hello User"

2. Add a CSS file to this folder and link it from your HTML
- Add a simple page styling with a static sidebar
- Make sure you can see the different sections (i.e. use green, blue, orange)
- Use 'display: grid' or 'display flex' for the layout 

A: Sidebar closed (default)
┏━━━━━━━━━━━━━━┓
┃    HEADER    ┃
┣━━━━━━━━━━━━━━┫
┃     MAIN     ┃
┃              ┃
┗━━━━━━━━━━━━━━┛

B: Sidebar open (toggle menu)
┏━━━┳━━━━━━━━━━┓
┃ S ┃  HEADER  ┃
┃ I ┣━━━━━━━━━━┫
┃ D ┃   MAIN   ┃
┃ E ┃          ┃
┗━━━┻━━━━━━━━━━┛

3. Toggle the sidebar when the button is clicked
- Store the toggle state in the browsers localStorage

- Add 'data-test-id="menu-button"' to the menu-button
- Add 'data-test-id="sidebar"' to the sidebar

Make sure that you implement the following features:

- .cypress/behaviors/features/ToggleSidebar.feature
- .cypress/behaviors/features/KeepSidebarState.feature

Run the tests via 'npm run cypress:open'
All tests should pass

`);
