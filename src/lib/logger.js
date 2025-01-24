// src/lib/logger.js
import pino from 'pino';

const logger = pino({
  level: 'debug', // Niveau de log
});

export default logger;