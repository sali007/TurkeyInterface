UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "4829",
  "logo": "4829.gif",
  "receiptName": "",
  "sName": "bpay.md",
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
                  "header": "¬ведите номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,7}$",
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