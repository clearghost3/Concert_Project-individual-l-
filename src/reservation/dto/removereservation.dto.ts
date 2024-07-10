import { IsNumber, IsNotEmpty } from 'class-validator';

export declare class RemoveReservationDto {
  @IsNumber()
  @IsNotEmpty({})
  id: number;
}
