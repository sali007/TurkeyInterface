UIProvider ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "1596",
  "logo": "1596.gif",
  "receiptName": "",
  "sName": "г.Минск Электроэнергия",
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
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${9,15}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9,15}$",
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