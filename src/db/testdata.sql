DO $$
BEGIN
  INSERT INTO collective (name, c_address, c_wallet, c_pool, "expiresAt")
  VALUES ('HPOS10', '0x123456789', '0x987654321', '0xabcdef123456789', NOW() + INTERVAL '5 weeks');
END $$;

DO $$
BEGIN
  INSERT INTO collective (name, c_address, c_wallet, c_pool, "expiresAt")
  VALUES ('Degen', '0x987654321', '0xabcdef123', '0x123456789abcdef', NOW() + INTERVAL '5 weeks');
END $$;

DO $$
BEGIN
  INSERT INTO collective (name, c_address, c_wallet, c_pool, "expiresAt")
  VALUES ('Enjoy', '0xabcdef123', '0x123456789', '0x987654321abcdef', NOW() + INTERVAL '5 weeks');
END $$;


INSERT INTO your_table_name (name, c_address, c_wallet, c_pool, created_at, expiresAt) 
VALUES ('DEGEN', '0x66c0e831C1352Da582b1A8b1301BB820C049044e', '0xb083c26FB3Df342cFB1826dBD210fCebfe71DC37', '0xeac0079a197dC6fcAf4fA693762531379Cf7a87d', '2024-04-12 06:08:03.700511', '2024-05-17 09:08:03.691');

INSERT INTO your_table_name (name, c_address, c_wallet, c_pool, created_at, expiresAt) 
VALUES ('HPOS10', '0x092f5b1C6d65BcfD58e89E93021DDd3bC6BbE4D8', '0xF2D450c93AF340088C6547F8D0Ba1c4226198858', '0x19136Fb5F7CE04031A37B2FF855FD0ac5FE272ae', '2024-04-12 06:08:25.133097', '2024-05-17 09:08:25.124');

INSERT INTO your_table_name (name, c_address, c_wallet, c_pool, created_at, expiresAt) 
VALUES ('MFERS', '0x65aBAf84759B5368518b42C9bD0C067921B6220B', '0x763b8101e1fD8F81d713665a7969FccC896E7E57', '0x4AfC20Ac4b6D9290808C1bAA37f33B3976165623', '2024-04-12 06:08:50.459216', '2024-05-17 09:08:50.451');

