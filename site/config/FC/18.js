UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100001",
  "id": "18",
  "logo": "18.gif",
  "receiptName": "",
  "sName": "МТС (интернет и ТВ, Москва) л/с",
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
                  "mask": "<!^\\d+${6,7}>-<!^\\d+${2}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,7}-\\d{2}$",
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