UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "300001",
  "logo": "300001.gif",
  "receiptName": "",
  "sName": "Радуга ТВ",
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
                    "header": "Введите номер карты доступа",
                  "footer": "",
                  "mask": "<!^\\d+${6,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,11}$",
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
};