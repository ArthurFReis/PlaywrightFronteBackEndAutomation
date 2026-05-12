import { test, expect } from '@playwright/test';

test.describe.parallel("API com paralelo", () => {

    test("tipos de teste de backend", async({request, page}) => {
        let tiposTest = [1,2,3,4];
        const site = 'https://brasilapi.com.br/api';

        for(let i = 0; i < tiposTest.length; i++){

            switch (tiposTest[i]) { 
            case 1:
                const response = await request.get(`${site}/banks/v1`);
                expect(response.status()).toBe(200);
                break;
            case 2:
                const response2 = await request.get(`${site}/banks/v1`);
                //expect(response2.status()).toBe(400);
                break;
            case 3:
                const response3 = await request.get(`${site}/banks/v1/1`);
                console.log(response3.status());
                expect(response3.status()).toBe(200);
                break;  
            case 4:
                const response4 = await request.get(`${site}/cep/v1/89010025`);
                expect(response4.status()).toBe(200);
                const responsebody = JSON.parse(await response4.text());
                console.log(responsebody);
                break;

            default:
                console.log("Tipo de teste inválido!");
                break;
        }   
        
    }

    });

});

    

