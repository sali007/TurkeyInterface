UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7809",
  "logo": "7809.gif",
  "receiptName": "",
  "sName": "Русский Стандарт. Погашение кредита",
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
                    "header": "Введите номер договора или номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${8,14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8,14}$",
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