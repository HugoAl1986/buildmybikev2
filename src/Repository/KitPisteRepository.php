<?php

namespace App\Repository;

use App\Entity\KitPiste;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitPiste|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitPiste|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitPiste[]    findAll()
 * @method KitPiste[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitPisteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitPiste::class);
    }

    // /**
    //  * @return KitPiste[] Returns an array of KitPiste objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?KitPiste
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
