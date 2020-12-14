<?php

namespace App\Repository;

use App\Entity\KitRoue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitRoue|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitRoue|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitRoue[]    findAll()
 * @method KitRoue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitRoueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitRoue::class);
    }

    // /**
    //  * @return KitRoue[] Returns an array of KitRoue objects
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
    public function findOneBySomeField($value): ?KitRoue
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
