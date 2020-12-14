<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201214071808 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE kit_vtt (id INT AUTO_INCREMENT NOT NULL, commande_id INT DEFAULT NULL, cadre VARCHAR(255) NOT NULL, modele VARCHAR(255) NOT NULL, couleur VARCHAR(255) NOT NULL, taille VARCHAR(255) NOT NULL, freins VARCHAR(255) NOT NULL, blocage VARCHAR(255) NOT NULL, finition VARCHAR(255) NOT NULL, prix DOUBLE PRECISION NOT NULL, INDEX IDX_E85DDD3D82EA2E54 (commande_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE kit_vtt ADD CONSTRAINT FK_E85DDD3D82EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE kit_vtt');
    }
}
