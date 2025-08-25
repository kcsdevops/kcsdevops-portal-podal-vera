const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function setupDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('🔧 Configurando banco de dados...');
    
    // Criar tabela de agendamentos
    await client.query(`
      CREATE TABLE IF NOT EXISTS appointments (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(100),
        date DATE NOT NULL,
        time TIME NOT NULL,
        service_type VARCHAR(100) NOT NULL,
        notes TEXT,
        status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        confirmed_at TIMESTAMP WITH TIME ZONE,
        cancelled_at TIMESTAMP WITH TIME ZONE
      )
    `);
    
    // Criar índices
    await client.query('CREATE INDEX IF NOT EXISTS idx_appointments_date_time ON appointments(date, time)');
    await client.query('CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status)');
    await client.query('CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at)');
    await client.query('CREATE INDEX IF NOT EXISTS idx_appointments_phone ON appointments(phone)');
    
    // Constraint única para evitar duplo agendamento
    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_appointments_date_time_active 
      ON appointments(date, time) 
      WHERE status IN ('pending', 'confirmed')
    `);
    
    console.log('✅ Banco de dados configurado com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro ao configurar banco:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  setupDatabase()
    .then(() => {
      console.log('🎉 Setup concluído!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Falha no setup:', error);
      process.exit(1);
    });
}

module.exports = { setupDatabase };
