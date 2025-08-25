-- Schema do banco de dados para sistema de agendamento Podal Vera

-- Tabela de agendamentos
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
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_appointments_date_time ON appointments(date, time);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at);
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON appointments(phone);

-- Constraint única para evitar duplo agendamento no mesmo horário
CREATE UNIQUE INDEX IF NOT EXISTS idx_appointments_date_time_active 
ON appointments(date, time) 
WHERE status IN ('pending', 'confirmed');

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_appointments_updated_at 
    BEFORE UPDATE ON appointments 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Função para limpar agendamentos antigos (opcional)
CREATE OR REPLACE FUNCTION cleanup_old_appointments()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    -- Remove agendamentos cancelados com mais de 30 dias
    DELETE FROM appointments 
    WHERE status = 'cancelled' 
    AND cancelled_at < NOW() - INTERVAL '30 days';
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    
    -- Remove agendamentos pendentes com mais de 7 dias (não confirmados)
    DELETE FROM appointments 
    WHERE status = 'pending' 
    AND created_at < NOW() - INTERVAL '7 days';
    
    GET DIAGNOSTICS deleted_count = deleted_count + ROW_COUNT;
    
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Inserir dados de exemplo (apenas em desenvolvimento)
-- INSERT INTO appointments (id, name, phone, email, date, time, service_type, status) VALUES
-- ('example-1', 'João Silva', '+5511999999999', 'joao@example.com', CURRENT_DATE + 1, '09:00', 'Consulta Podológica', 'confirmed'),
-- ('example-2', 'Maria Santos', '+5511888888888', 'maria@example.com', CURRENT_DATE + 2, '14:30', 'Tratamento de Unhas Encravadas', 'pending');

-- Comentários das tabelas
COMMENT ON TABLE appointments IS 'Tabela de agendamentos do sistema Podal Vera';
COMMENT ON COLUMN appointments.id IS 'UUID único do agendamento';
COMMENT ON COLUMN appointments.name IS 'Nome completo do paciente';
COMMENT ON COLUMN appointments.phone IS 'Telefone/WhatsApp do paciente';
COMMENT ON COLUMN appointments.email IS 'E-mail do paciente (opcional)';
COMMENT ON COLUMN appointments.date IS 'Data do agendamento';
COMMENT ON COLUMN appointments.time IS 'Horário do agendamento';
COMMENT ON COLUMN appointments.service_type IS 'Tipo de serviço solicitado';
COMMENT ON COLUMN appointments.notes IS 'Observações do paciente';
COMMENT ON COLUMN appointments.status IS 'Status: pending, confirmed, cancelled, completed';
COMMENT ON COLUMN appointments.created_at IS 'Data/hora de criação do agendamento';
COMMENT ON COLUMN appointments.updated_at IS 'Data/hora da última atualização';
COMMENT ON COLUMN appointments.confirmed_at IS 'Data/hora de confirmação';
COMMENT ON COLUMN appointments.cancelled_at IS 'Data/hora de cancelamento';
