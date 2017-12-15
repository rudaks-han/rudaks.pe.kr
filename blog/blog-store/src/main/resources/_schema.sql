-- Table: t_category

-- DROP TABLE t_category;

CREATE TABLE t_category
(
  id character varying(36) NOT NULL,
  category character varying(100) NOT NULL,
  name character varying(100) NOT NULL,
  delete_flag character varying(1) DEFAULT 'N'::character varying,
  public_flag character varying(1) DEFAULT 'Y'::character varying,
  sort_order numeric,
  description character varying(4000),
  created_date character varying(14) NOT NULL,
  updated_date character varying(14) NOT NULL,
  CONSTRAINT pk_category PRIMARY KEY (id)
);

-- DROP TABLE t_guestbook;

CREATE TABLE t_guestbook
(
  id character varying(36) NOT NULL,
  ref numeric NOT NULL,
  username character varying(64) NOT NULL,
  email character varying(128) NOT NULL,
  ipaddress character varying(15),
  delete_flag character varying(1),
  password character varying(32),
  comment character varying(8000),
  created_date character varying(14) NOT NULL,
  updated_date character varying(14) NOT NULL,
  old_ref numeric,
  CONSTRAINT pk_guestbook PRIMARY KEY (id)
);

-- DROP TABLE t_post;

CREATE TABLE t_post
(
  id character varying(36) NOT NULL,
  category character varying(100) NOT NULL,
  username character varying(64) NOT NULL,
  email character varying(128) NOT NULL,
  view_count numeric DEFAULT 0,
  attach_count numeric DEFAULT 0,
  ipaddress character varying(15),
  delete_flag character varying(1),
  title character varying(1024) NOT NULL,
  old_seq numeric,
  content text,
  created_date character varying(14) NOT NULL,
  updated_date character varying(14) NOT NULL,
  CONSTRAINT pk_post PRIMARY KEY (id)
);


CREATE INDEX idx_post_category
  ON t_post
  USING btree
  (category COLLATE pg_catalog."default", id);

CREATE INDEX idx_post_old_seq
  ON t_post
  USING btree
  (old_seq);

-- Table: t_attach_file

-- DROP TABLE t_attach_file;

CREATE TABLE t_attach_file
(
  post_id character varying(36) NOT NULL,
  seq numeric NOT NULL,
  file_name character varying(200) NOT NULL,
  file_path character varying(200) NOT NULL,
  file_size numeric,
  CONSTRAINT pk_attach_file PRIMARY KEY (post_id, seq)
);

-- Table: geoip_country

-- DROP TABLE geoip_country;

CREATE TABLE geoip_country
(
  begin_ip character varying(64) NOT NULL,
  end_ip character varying(64) NOT NULL,
  begin_ip_num bigint NOT NULL,
  end_ip_num bigint NOT NULL,
  country_code character varying(2) NOT NULL,
  country_name character varying(64) NOT NULL,
  CONSTRAINT pk_geoip_country PRIMARY KEY (begin_ip, end_ip)
);



-- Function: inet_to_bigint(inet)

-- DROP FUNCTION inet_to_bigint(inet);

CREATE OR REPLACE FUNCTION inet_to_bigint(inet)
  RETURNS bigint AS
$BODY$
    SELECT $1 - inet '0.0.0.0'
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION inet_to_bigint(inet)
  OWNER TO postgres;
GRANT EXECUTE ON FUNCTION inet_to_bigint(inet) TO public;
