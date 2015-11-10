UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7810",
  "logo": "7810.gif",
  "receiptName": "",
  "sName": "Русский Стандарт. Пополнение счета",
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
                    "header": "Введите номер договора или номер счета или номер карты",
                  "footer": "",
                  "mask": "<!^\\d+${8,16}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8,16}$",
                  "strip": "false",
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
}