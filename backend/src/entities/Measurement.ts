import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm'
import User from './User'

@Entity()
export default class Measurement {
    @PrimaryGeneratedColumn()
    public id?: number

    @Column({ name: 'created_at', type: 'date', default: () => 'now()' })
    public createdAt!: Date;

    @Column('decimal', { precision: 4, scale: 1 })
    public weight!: number;

    @Column('decimal', { precision: 3, scale: 1 })
    public biceps!: number;

    @Column('decimal', { precision: 4, scale: 1 })
    public chest!: number;

    @Column('decimal', { precision: 3, scale: 1 })
    public thigh!: number;

    @Column('decimal', { precision: 3, scale: 1 })
    public calf!: number;

    @Column('decimal', { precision: 4, scale: 1 })
    public waist!: number;

    @ManyToOne(() => User, user => user.measurements, { cascade: true })
    public user!: User;
}
