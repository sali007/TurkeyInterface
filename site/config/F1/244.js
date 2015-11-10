var okr = 555;
UIProvider ={"curId":"980","curNom":"UAH",
"round_math":"~1",
  "grpId": "100002",
  "id": "244",
  "logo": "244.gif",
  "receiptName": "",
  "sName": "Global SIM",
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
                  "mask": "+38<!^[0]*${1}><!^[69]*${1}><!^[3]*${1}><!^[0-9]*${7}>",
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