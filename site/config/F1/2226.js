UIProvider  ={"curId":"704","curNom":"VND",
  "grpId": "100007",
  "id": "2226",
  "logo": "2226.gif",
  "receiptName": "",
  "sName": "MobiFone",
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
                  "mask": "<!^\\d+${7,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{7,12}$",
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