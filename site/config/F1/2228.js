UIProvider  ={"curId":"704","curNom":"VND",
  "grpId": "100007",
  "id": "2228",
  "logo": "2228.gif",
  "receiptName": "",
  "sName": "EVN Telecom",
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
                  "mask": "<!^\\d+${7,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[089]{1}[459]{1}\\d{5,9}$",
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