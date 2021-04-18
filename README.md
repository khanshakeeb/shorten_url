# shorten_url
This project is demo project for shorten long URLs

## Improvements
1. URL link validator supposed to be implemented.
2. Nice to have short url expiry time.
3. When user click on short url it should also capture per click counter.
4. We can add User authentication with his dashboard.

## Technical Debt
Since this is demo application so there are alot of things that need to be improved.
### Frontend
1. Frontend made with ReactJS app for the demo purpose. App.js mostly contain all the application logic but when application grows it needs to be subdivided into component folder structure.
2. On basic level presentation I have used Bootstrap framework. On professionally I would recommend StyleJS or EmotionJS for styling components
3. A valid url validation could also be perform on client side as well.
### Backend API
1. On backend api url need to be validate before inserting into DB.
2. Since Controller, Model and Service are decouple by following DI design pattern. It require to test properly on component level. At the moment test cases are not coverd.
