UIProvider  ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "868",
  "logo": "868.gif",
  "receiptName": "",
  "sName": "Продажа WMB",
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
                  "header": "Введите номер WMB кошелька",
                  "footer": "Вводить WM ID запрещено",
                  "mask": "B<!^\\d+${12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[B]\\d{12}$",
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