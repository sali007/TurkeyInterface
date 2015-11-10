UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "300004",
  "logo": "300004.gif",
  "receiptName": "",
  "sName": "Ukash",
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
                    "header": "¬ведите номер вашего мобильного телефона",
                  "footer": "",
                  "mask": "<!^\\d+${10,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,12}$",
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