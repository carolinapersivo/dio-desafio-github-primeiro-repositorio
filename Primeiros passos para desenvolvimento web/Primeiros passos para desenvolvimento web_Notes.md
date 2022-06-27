# Anotações do curso: Primeiros passos para o desenvolvimento web

### Redes

- Backbone = estruturas mais robustas, com poucas espalhadas pelo mundo

- Provedores de acesso = empresas telefônicas que contratam sinal do backbone e repassam ao usuário final

  - Ex.: Dial-up, ADSL, fibra ótica, rádio, satélite, móvel, P2P (peer-to-peer)

  > P2P = comunicação direta entre dois dispositivos sem necessariamente acessar a internet

- Caminho inverso = www > DNS > IP > Classes de redes > 127.0.0.1 (local host)

### TCP/IP, portas, roteadores, switches e modems

##### TCP/IP = protocolos de comunicação entre computadores em rede

- Definição:
  - TCP = Transmission Control Protocol
  - IP = Internet Protocol
- 4 camadas = física (ex.: placa de rede), rede (ex.: IP), transporte (ex.: TCP, UDP) e aplicação (ex. FTP, SMTP, HTTP)

> FTP = envio de arquivos
>
> SMTP = email
>
> HTTP = websites

##### TCP x UDP

- UDP = rápido, não confiável
  - Analogia = carro do ovo
  - Utilização: _livestream_
- TCP = voltado à conexão, estilo _handshake_ (etapas de conexão, validação, etc.), integridade (ordem dos dados)
  - Utilização = aplicativo de mensagens de texto

##### Portas (deveria ter sido traduzido como portos)

- Uso = por onde os dados saem e chegam

- Tipos: FTP (20:), SSH (22:), SMTP (25:), DNS (53:), HTTP (80:), HTTPS (:443)

##### Modem

- **MO**DULATOR-**DEM**ODULATOR = hardware que converte dados em formato que possa ser transmitido de um computador para outro e lido por outro

##### Roteador

- Distribui internet para um ou mais dispositivos em uma rede
- Pode fazer comunicação entre redes

##### Switch

- Distribui internet como um roteador, porém de modo mais inteligente

> Algumas portas de interesse: MySQL (3306), Apache (80)

### Celular, internet e outros dispositivos

##### Dados móveis

- Evolução SMS (textos), MMS (mensagens de mídia)

- Evolução das conexões: 1G (analógico), 2G (digital, GSM), 2.5G (GPRS), 2.75G (EDGE), 3G, 4G, 5G

  > GSM = Global System for Mobile Communication
  >
  > GPRS = General Packet Radio System
  >
  > EDGE = Enhanced Data Rates for GSM Evolution

##### Wi-fi

- IEEE = define padrões para wi-fi
  - IEEE 802.11: 2,4GHz, 2Mbps
  - IEEE 802.11a: 5GHz, 54Mbps
  - IEEE 802.11b: 2,4GHz, 11Mbps (diminuição da interferência)
  - IEEE 802.11g: 2,4GHz, 54Mbps
  - IEEE 802.11n: 2,4GHz/5GHz, 150-600Mbps
- **Segurança**
  - WEP = chaves de 64 bits e de 128 bits
  - WPA = chave trocada periodicamente
  - WPA2 (AES) (802.11i) = traz mais segurança, porém requer mais processamento
- **Bluetooth**
  - Conexão ponto-a-ponto
    - Classes (potência/distância): 1 (100mW/100m), 2 (2,5mW/10m) e 3 (1mW/1m)
    - Versões: 1.2 (1Mbps), 2.0+EDR (3Mbps), 3.0 (24Mbps), 4.0 (25Mbps), 5.0 (50Mbps)
