<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201214080943 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE kit_cyclocross (id INT AUTO_INCREMENT NOT NULL, commande_id INT DEFAULT NULL, modele VARCHAR(255) NOT NULL, couleur VARCHAR(255) NOT NULL, taille VARCHAR(255) NOT NULL, blocage VARCHAR(255) NOT NULL, boitier VARCHAR(255) NOT NULL, finition VARCHAR(255) NOT NULL, prix DOUBLE PRECISION NOT NULL, INDEX IDX_4B039B4382EA2E54 (commande_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE kit_roue (id INT AUTO_INCREMENT NOT NULL, commande_id INT DEFAULT NULL, modele VARCHAR(255) NOT NULL, couleur VARCHAR(255) NOT NULL, prix DOUBLE PRECISION NOT NULL, INDEX IDX_3150811182EA2E54 (commande_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE kit_cyclocross ADD CONSTRAINT FK_4B039B4382EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id)');
        $this->addSql('ALTER TABLE kit_roue ADD CONSTRAINT FK_3150811182EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id)');
        $this->addSql('ALTER TABLE kit_piste CHANGE freins boitier VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE kit_route ADD boitier VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE kit_triathlon ADD boitier VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE kit_vtt ADD boitier VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE kit_cyclocross');
        $this->addSql('DROP TABLE kit_roue');
        $this->addSql('ALTER TABLE kit_piste CHANGE boitier freins VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE kit_route DROP boitier');
        $this->addSql('ALTER TABLE kit_triathlon DROP boitier');
        $this->addSql('ALTER TABLE kit_vtt DROP boitier');
    }
}
