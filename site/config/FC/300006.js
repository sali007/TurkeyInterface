UIProvider  ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "300006",
  "logo": "431.gif",
  "receiptName": "",
  "sName": "NEO",
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
                  "footer": "Внимание номер вводится в формате : 707xxxxxxx . Пример : 7076420109",
                  "mask": "(<!^\\d+${3}>)<!^\\d+${7}>",
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