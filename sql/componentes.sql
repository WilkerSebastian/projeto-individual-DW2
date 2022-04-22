CREATE TABLE IF NOT EXISTS public.componentes
(
    id serial NOT NULL,
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "dataEntrada" date NOT NULL,
    tipo character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "desc" text COLLATE pg_catalog."default" NOT NULL,
    valor double precision NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT componentes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.componentes
    OWNER to postgres;