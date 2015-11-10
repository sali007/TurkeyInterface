
UIProvider ={"curId":"643","curNom":"RUB",
    "grpId": "100001",
    "id": "100",
    "logo": "100.gif",
    "receiptName": "",
    "sName": "RU-CENTER",
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
                                    "header": "Номер и тип договора",
                                    "footer": "Введите ваш номер и тип договора",
                                    "mask": "<!^\d+${3,15}/NIC-[DREG]{1,3}$>",
                                    "name": "account",
                                    "nobr": "false",
                                    "regexp": "^\d{3,15}/NIC-[DREG]{1,3}$",
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