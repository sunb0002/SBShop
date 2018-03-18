export * from './internal.service';
import { InternalService } from './internal.service';
export * from './profile.service';
import { ProfileService } from './profile.service';
export const APIS = [InternalService, ProfileService];
