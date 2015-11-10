UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "5413",
  "logo": "5413.gif",
  "receiptName": "",
  "sName": "QIWI Кошелек",
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
                  "header": "Введите номер телефона в системе \"QIWI Кошелек\"",
                  "footer": "",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${3}>-<!^\\d+${2}>-<!^\\d+${2}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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
}