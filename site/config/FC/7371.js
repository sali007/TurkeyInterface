UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7371",
  "logo": "3205.gif",
  "receiptName": "",
  "sName": "Киевстар Интернет Дома",
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
                  "mask": "<!^\\d+${7,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{7,10}$",
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