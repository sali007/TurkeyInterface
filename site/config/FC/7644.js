UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7644",
  "logo": "7644.gif",
  "receiptName": "",
  "sName": "Берсерк Онлайн",
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
                    "header": "Введите идентификационный номер вашего персонажа",
                  "footer": "",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,20}$",
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