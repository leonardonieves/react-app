

import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        settings: {
            //General Settings
            appName: '',
            appUrl: '',
            companyName: '',
            companyDetails: '',
            logs: 365,
            perPage: 10,
            defaultAssetTag: 'AST-',
            defaultLicenseTag: 'LIC-',
            defaultContractTag: 'CTR-',
            passwordLength: 6,
            //Localization Settings
            first_dow: 1,
            default_lang: 'en',
            timeZone: 'UTC',
            dateFormat: 'YYYY-MM-DD',
            //Labels Settings
            labelWidth: 70,
            labelHeight: 60,
            qrSize: '1.3',
            isQRUrl: 'false',
            //Emails Settings
            emailFromAddress: 'kobargo@example.com',
            emailFromName: 'Kobargo',
            smtpHost: 'smtp.gmail.com',
            smtpUserName: 'sampleuser@gmail.com',
            smtpPassword: 'MyPassword123',
            smtpSecurity: 'none',
            smtpPort: '587',
            //SMS Settings
            smsProvider: "clickatell",
            smsUser: "username",
            smsPassword: "MyPassword123",
            smsAPIKey: "ABCDFG12345",
            smsAPISecret: "ABCDFG12345",
            smsFrom: "Kobargo",
            //LDAP/AD Settings
            ldapEnable: 'false',
            ldapHost: '',
            ldapPort: '389',
            ldapDN: 'example.com'
        },
        isLoading: false
    },
    reducers: {
        setGeneralSettings: (state, ...rest) => {
            let payload = rest[0].payload
            state.settings = payload
        },
    }
})

export const selectGeneralSettings = state => state.settings.settings

export const { setGeneralSettings } = settingsSlice.actions

export default settingsSlice.reducer