describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал "войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяем на текст "Авторизация прошла успешно"
         cy.get('#messageHeader').should('be.visible'); //Проверяем , что текст "Авторизация прошла успешно" видно пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем , что пользователю видно крестик
     })

  
     it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').click(); //Нажал "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#restoreEmailButton').click(); //Нажал "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяем на текст "Успешно отправили пароль на e-mail"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем , что пользователю видно крестик
     })

    
     it('Неправильный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastud'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажал "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем на текст "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible'); //Проверяем , что текст "Такого логина или пароля нет" видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем , что пользователю видно крестик
     })

   
     it('Правильный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('gen@dolnikov.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем на текст "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible'); //Проверяем , что текст "Такого логина или пароля нет" видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем , что пользователю видно крестик
     })

    
     it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввели верный логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал "войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяем на текст "Нужно исправить проблему валидации"
        cy.get('#messageHeader').should('be.visible'); //Проверяем , что текст "Нужно исправить проблему валидации" видно пользователю
     })


     it('Верхний и нижний регистр в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин,но с заглавными G, M ,D
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяем на текст "Авторизация прошла успешно"
        cy.get('#messageHeader').should('be.visible'); //Проверяем , что текст "Авторизация прошла успешно" видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем , что пользователю видно крестик
     })     
 })
 
 
 
 describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });
