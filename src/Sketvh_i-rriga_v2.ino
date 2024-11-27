#include <SPIFFS.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

/*********
  Rui Santos
  Complete project details at https://randomnerdtutorials.com
*********/

// Import required libraries
#include "WiFi.h"
#include "ESPAsyncWebServer.h"
#include "SPIFFS.h"
#include "ArduinoJson.h"
#include "nlohmann/json.hpp"
#include "fstream"

// Replace with your network credentials
const char *ssid = "NET_2G12A8F9";
const char *password = "D012A8F9";

// Create AsyncWebServer object on port 80
AsyncWebServer server(80);

void setup()
{
  // Serial port for debugging purposes
  Serial.begin(115200);

  // Initialize SPIFFS
  if (!SPIFFS.begin(true))
  {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  std::ofstream fileToWrite;

  fileToWrite.open("/Models/test.json");

  fileToWrite << R"(
    {
      "x": 20,
      "str": "test"
    }
  )";

  fileToWrite.close();

  std::ifstream fileToRead("/Models/test.json");

  nlohmann::json obj;

  fileToRead >> obj;

  Serial.println(obj["x"].get<int>());
  Serial.println(obj["str"].get<std::string>().c_str());

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  // Print ESP32 Local IP Address
  Serial.println(WiFi.localIP());

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/index.html"); });
  server.on("/index.html", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/index.html"); });

  // Route to load style.css file
  server.on("/Style/style.css", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Style/style.css", "text/css"); });
  server.on("/Style/lowWidth.css", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Style/lowWidth.css", "text/css"); });

  // Rotas para as imagens
  server.on("/Imagens/logoIrriga64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/logoIrriga64.png", "image/png"); });
  server.on("/Imagens/routineWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/routineWhite64.png", "image/png"); });
  server.on("/Imagens/sprinklerWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/sprinklerWhite64.png", "image/png"); });
  server.on("/Imagens/unavailable64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/unavailable64.png", "image/png"); });
  server.on("/Imagens/searchWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/searchWhite64.png", "image/png"); });
  server.on("/Imagens/waterFauWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/waterFauWhite64.png", "image/png"); });
  server.on("/Imagens/inforWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/inforWhite64.png", "image/png"); });
  server.on("/Imagens/settingsWhite64.png", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Imagens/settingsWhite64.png", "image/png"); });
  server.on("/Fontes/asapvariable1.woff", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Fontes/asapvariable1.woff", "text/css"); });
  server.on("/Fontes/asapvariable2.woff2", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Fontes/asapvariable2.woff2", "text/css"); });

  // Rotas para arquivos javaScript
  server.on("/Scripts/window.js", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Scripts/window.js", "text/javascript;charset=UTF-8"); });
  server.on("/Scripts/append.js", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Scripts/append.js", "text/javascript;charset=UTF-8"); });
  server.on("/Scripts/script.js", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Scripts/script.js", "text/javascript;charset=UTF-8"); });

  // Rota para arquivos JSON
  server.on("/Models/Aspersores.json", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Models/Aspersores.json", "application/json;charset=UTF-8"); });
  server.on("/Models/Aspersores.json", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(SPIFFS, "/Models/test.json", "application/json;charset=UTF-8"); });

  // Imprime o comando dos aspersores
  server.on("/comando-aspersor", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              int params = request->params();
              for (int i = 0; i < params; i++)
              {
                AsyncWebParameter *p = request->getParam(i);
                Serial.println(p->name().c_str());
              }
              request->send(200); });
  // Imprime o comando da rotina de teste
  server.on("/rotina-teste", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              int params = request->params();
              for (int i = 0; i < params; i++)
              {
                AsyncWebParameter *p = request->getParam(i);
                Serial.println(p->name().c_str());
              }
              request->send(200); });
  // Desligar tudo
  server.on("/desligar-tudo", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              Serial.println("Z");
              request->send(200); });
  // Ativar ciclo diário
  server.on("/ciclo-diario", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              Serial.println("I");
              request->send(200); });
  server.on("/retornar-status", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              Serial.println("S");
              request->send(200); });
  // 404
  server.onNotFound([](AsyncWebServerRequest *request)
                    { request->send(404); });
  // Start server
  server.begin();

  xTaskCreatePinnedToCore(
      vTaskBlink, "TaskBlink" /* Nome da Task */
      ,
      configMINIMAL_STACK_SIZE /* Stack Size, não se preocupe com esse valor agora. Vamos estudar mais pra frente*/
      ,
      NULL /* parametro passado para a task*/
      ,
      2 /* Prioridade da task*/
      ,
      NULL, 0);
}

void loop()
{
}

void vTaskBlink(void *pvParameters)
{

  (void)pvParameters;
  pinMode(BUILTIN_LED, OUTPUT);

  while (1)
  {
    digitalWrite(BUILTIN_LED, !digitalRead(BUILTIN_LED));
    vTaskDelay(pdMS_TO_TICKS(2000));
  }
}