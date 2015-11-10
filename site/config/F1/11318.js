UIProvider = {
    "curId": "417", "curNom": "KGS",
    
  "round_math":"~1",
  "grpId": "1000010",
  "id": "11318",
  "logo": "11318.gif",
  "receiptName": "",
  "sName": "(KazMoneyUnion) WebMoney",
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
                    "header": "¬ведите номер Z кошелька",
                    "footer": "",
                    "mask": "Z<!^.+${12}>",
                    "name": "account",
                    "nobr": "false",
                    "regexp": "^([0-9Z]{13})$",
                    "strip": "False",
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