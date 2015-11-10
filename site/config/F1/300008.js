UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "1000011",
  "id": "300008",
  "logo": "4914.gif",
  "receiptName": "",
  "sName": "Tcell/South",
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
                  "footer": "Внимание! Номер счета должен начинаться с: 92, 93, 50, 77. Пример: 935149998",
                  "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
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