<?php

namespace App\Repository;

use App\Entity\KitVtt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitVtt|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitVtt|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitVtt[]    findAll()
 * @method KitVtt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitVttRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitVtt::class);
    }

    // /**
    //  * @return KitVtt[] Returns an array of KitVtt objects
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
    public function findOneBySomeField($value): ?KitVtt
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
