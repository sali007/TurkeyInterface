UIProvider ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "2630",
  "logo": "2630.gif",
  "receiptName": "",
  "sName": "Оплата кредита - «Сомбелбанк»",
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
                  "header": "Введите уникальный номер сделки",
                  "footer": "",
                  "mask": "<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{7}$",
                  "strip": "False",
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