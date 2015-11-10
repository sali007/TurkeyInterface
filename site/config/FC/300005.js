UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "300005",
  "logo": "300005.gif",
  "receiptName": "",
  "sName": "Монета.ru",
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
                    "header": "Пополнение счета",
                  "footer": "",
                  "mask": "<!^\\d+${8,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8,10}$",
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