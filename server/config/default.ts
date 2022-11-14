


export default {
    port: 1337,
    host: "localhost",
    dbUri: "mongodb://localhost:27017/test",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: "1y",
    publicKey: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDAxlcVfk20P7oQC5yce
    FmMNbHL3wPdJndKUR7SJMYXGB9Po6uUZYBx1rn/T40kH5XoFvxT2zv6tcyHCAyPHJBwsR
    IiKMtMfF52HKsAGTZ6kaya9bvqiLRC5gI9qwZ7FE0vREtVne855nb5OU+WQBAChZvcVtW
    24JV/N5bsg4MTA7KgroY7wRk1/GazMYVtFbvvbXfEkr/oYSwvTrEjFOWWu0ccrPT34i5O
    jzD3uSMV4IrapljD3fyJVjHYunbEiXS+NGO7Zy7XThPDpGQjctPhTyYo9QUrjfYyny7F+
    wO7OeY6fQ+66ddUrABDAYAEf9a1rLCCDVvDb+eUdbAtMlgGNe6uJC84z16fltRm3PEEv5
    IXB1c4R3tCxB+o0+9SA2h6lOAyyXzB40bRUeiILASCI9+v3BKs2gwbXG+cCNL845zDGwW
    Z2TKIHeFBPZXiHaP4jZ3mesYFJ6Z3OuVpfBEIv7sGDcO/WtaC0EmOJ32k8GgcA6U27kng
    PsUt8mMTaXnpQXg+1zKDIVIbEU/s0x8eHbAo6UXQ9HZf3DTG2+n6SNawVUN2I7pvvtfh1
    QQ1FHGPThOHSinCgCxLeSRzLaS82qoCpLMZ5pFgI6yOA/lsXvwe8rZIfo8w8U4UzDxJVq
    qpE166sW3+qsjRMIWIpomp8UrH4x22PuSKevq9Y/QUEw== casey@DESKTOP-J5FG2HD
    `,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    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
    -----END RSA PRIVATE KEY-----`
}

