UIProvider = {
    "curId": "398", "curNom": "AMD",
  "grpId": "1000011",
  "id": "400001",
  "logo": "400001.png",
  "receiptName": "",
  "sName": "MOBIDRAM",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш номер",
                  "footer": "Пример : 93600446",
                  "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[0-9]{8}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
                  "type": "keyboard"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};