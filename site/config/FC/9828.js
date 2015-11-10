UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "9828",
  "logo": "9828.gif",
  "receiptName": "",
  "sName": "Баланс Вконтакте",
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
                    "header": "Введите ID Вашей страницы или Логин/e-mail",
                  "footer": "",
                  "mask": "<!^\\d+${1,32}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,32}$",
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