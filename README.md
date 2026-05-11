# Dispatch Intelligence

Sistema inteligente de despacho automático para plataformas MaaS e transporte executivo.

## Objetivo

Selecionar automaticamente o melhor motorista para cada corrida utilizando:

- ETA
- distância
- trânsito
- score operacional
- SLA
- disponibilidade
- tempo ocioso

---

# Stack

- NestJS
- TypeScript
- PostgreSQL
- Redis
- WebSocket
- Docker

---

# Funcionalidades

- Auto Dispatch
- Driver Scoring
- ETA Intelligence
- Tracking Realtime
- Dispatch Realtime
- Heatmap Operacional

---

# Fluxo Operacional

```txt
Nova corrida
    ↓
Buscar motoristas próximos
    ↓
Calcular ETA
    ↓
Aplicar score
    ↓
Selecionar melhor motorista
    ↓
Enviar push
    ↓
Atualizar operação realtime
```

---

# Instalação

```bash
npm install
```

---

# Executar

```bash
docker-compose up -d
npm run start:dev
```
