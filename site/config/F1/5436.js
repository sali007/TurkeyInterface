UIProvider  ={"curId":"980","curNom":"UAH",
  "grpId": "100002",
  "id": "5436",
  "logo": "5436.gif",
  "receiptName": "",
  "sName": "TELETIE",
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
                  "mask": "<!^\\d+${11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11}$",
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