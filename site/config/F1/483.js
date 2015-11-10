
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "483",
  "logo": "483.gif",
  "receiptName": "",
  "sName": "MetroNet",
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
                  "header": "Ваш номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${10,14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,14}$",
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