
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "400059",
  "logo": "400059.gif",
  "receiptName": "",
  "sName": "ДОМ.RU",
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
                  "header": "Ваш номер договора или лицевого счета",
                  "footer": "",
                  "mask": "<!^.*${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,40}$",
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