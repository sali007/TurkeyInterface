UIProvider  ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "4648",
  "logo": "4648.gif",
  "receiptName": "",
  "sName": "МТС лицевые счета",
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
                  "footer": "",
                  "mask": "<!^\\d+${3,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{3,12}$",
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